import { getWeb3 } from "~/store/utils";
class NftManager {
  constructor() {
    this.account = null;
    this.nfts = null;
    this.tokenContract = null;
    this.marketContract = null;
  }

  async init() {
    let itemsList = [];
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      if (typeof accounts === undefined) {
        alert("Please login with Metamask!");
        console.log("login to metamask");
      }

      const networkId = await web3.eth.net.getId();
      try {
        const artTokenContract = new web3.eth.Contract(
          ArtToken.abi,
          ArtToken.networks[networkId].address
        );
        // console.log("Contract: ", artTokenContract);
        const marketplaceContract = new web3.eth.Contract(
          ArtMarketplace.abi,
          ArtMarketplace.networks[networkId].address
        );
        const totalSupply = await artTokenContract.methods.totalSupply().call();
        const totalItemsForSale = await marketplaceContract.methods
          .totalItemsForSale()
          .call();

        for (let tokenId = 1; tokenId <= totalSupply; tokenId++) {
          let item = await artTokenContract.methods.Items(tokenId).call();
          let owner = await artTokenContract.methods.ownerOf(tokenId).call();

          const response = await api.get(`/tokens/${tokenId}`).catch((err) => {
            console.log("Err: ", err);
          });
          console.log("response: ", response);

          itemsList.push({
            name: response.data.name,
            description: response.data.description,
            image: response.data.image,
            tokenId: item.id,
            creator: item.creator,
            owner: owner,
            uri: item.uri,
            isForSale: false,
            saleId: null,
            price: 0,
            isSold: null,
          });
        }
        if (totalItemsForSale > 0) {
          for (let saleId = 0; saleId < totalItemsForSale; saleId++) {
            let item = await marketplaceContract.methods
              .itemsForSale(saleId)
              .call();
            let active = await marketplaceContract.methods
              .activeItems(item.tokenId)
              .call();

            let itemListIndex = itemsList.findIndex(
              (i) => i.tokenId === item.tokenId
            );

            itemsList[itemListIndex] = {
              ...itemsList[itemListIndex],
              isForSale: active,
              saleId: item.id,
              price: item.price,
              isSold: item.isSold,
            };
          }
        }

        // dispatch(setAccount(accounts[0]));
        // dispatch(setTokenContract(artTokenContract));
        // dispatch(setMarketContract(marketplaceContract));
        // dispatch(setNft(itemsList));
      } catch (error) {
        console.error("Error", error);
        alert(
          "Contracts not deployed to the current network " +
            networkId.toString()
        );
      }
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.` +
          error
      );
      console.error(error);
    }
  }

  async getNft() {
    return this.nft;
  }
}
