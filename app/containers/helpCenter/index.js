import {
  BiCartAlt,
  BiCookie,
  BiPurchaseTagAlt,
  BiRocket,
  BiSearch,
} from "react-icons/bi";
import { CustomLink } from "~/components";
import { Button, TextField } from "~/KIT";
import { motion } from "framer-motion";

const container = {
  hidden: {
    // opacity: 0,
  },
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};
export default function Index() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex column"
    >
      <section className="container md flex column alignCenter pt16 pb16">
        <motion.h1 variants={itemAnim} className="fs-600 textSecondary">
          Hi, We're' here to help you
        </motion.h1>
        <motion.div
          style={{ width: "32em" }}
          variants={itemAnim}
          className="mt3 mW100"
        >
          <TextField
            className="w100"
            startIcon={<BiSearch className="ml3" />}
            placeholder="Ask a question"
            endIcon={
              <Button
                className="m1 contained"
                style={{ padding: "0.25em 0.75em" }}
              >
                Search
              </Button>
            }
          />
        </motion.div>
        <motion.label variants={itemAnim} className="textSecondary mt8 mb3">
          Popular Search
        </motion.label>
        <div
          className="flex wrap justifyCenter gap-2"
          style={{ maxWidth: "40em" }}
        >
          <motion.div
            variants={itemAnim}
            className="pl3 pr3 pt1 pb1 radius-1 shadow-1 mainFilledBg"
          >
            <CustomLink className="" to="/helpCenter/gettingStarted">
              accounting exports
            </CustomLink>
          </motion.div>
          <motion.div
            variants={itemAnim}
            className="pl3 pr3 pt1 pb1 radius-1 shadow-1 mainFilledBg"
          >
            <CustomLink className="" to="/helpCenter/gettingStarted">
              how create nft
            </CustomLink>
          </motion.div>
          <motion.div
            variants={itemAnim}
            className="pl3 pr3 pt1 pb1 radius-1 shadow-1 mainFilledBg"
          >
            <CustomLink className="" to="/helpCenter/gettingStarted">
              sell nft
            </CustomLink>
          </motion.div>
          <motion.div
            variants={itemAnim}
            className="pl3 pr3 pt1 pb1 radius-1 shadow-1 mainFilledBg"
          >
            <CustomLink className="" to="/helpCenter/gettingStarted">
              what is collection offer
            </CustomLink>
          </motion.div>
          <motion.div
            variants={itemAnim}
            className="pl3 pr3 pt1 pb1 radius-1 shadow-1 mainFilledBg"
          >
            <CustomLink className="" to="/helpCenter/gettingStarted">
              what can i do with discover in my dashboard
            </CustomLink>
          </motion.div>
        </div>
      </section>

      <section className="container md flex column alignCenter pt16 pb16">
        <motion.h2 variants={itemAnim} className="fs-400 fontBold">
          Discover more
        </motion.h2>
        <motion.p variants={itemAnim} className="textSecondary mt2">
          Choose a category to find the answer to your question
        </motion.p>
        <div className="grid col4 col2-sm col1-xs gap-3 w100 mt8">
          <motion.div variants={itemAnim}>
            <CustomHelpButton
              label="Getting Started"
              icon={BiRocket}
              to="/helpCenter/gettingStarted"
              text="Learn how to create an account, set up your wallet, and what you can do on Asgar"
            />
          </motion.div>
          <motion.div variants={itemAnim}>
            <CustomHelpButton
              label="Creating NFT"
              icon={BiCookie}
              to="/helpCenter/creating"
              text="Learn how to create your first NFT and how to create NFT collections"
            />
          </motion.div>
          <motion.div variants={itemAnim}>
            <CustomHelpButton
              label="Buying"
              icon={BiCartAlt}
              to="/helpCenter/buying"
              text="Learn how to purchase your first NFT, understand gas fees, and see what's gas free"
            />
          </motion.div>
          <motion.div variants={itemAnim}>
            <CustomHelpButton
              label="Selling"
              icon={BiPurchaseTagAlt}
              to="/helpCenter/selling"
              text="How list your NFTs for sale and understand the different ways to list your NFTs"
            />
          </motion.div>{" "}
        </div>
      </section>
      {/* <div className="flex wrap gap-1">
        <CustomLink to="/helpCenter/gettingStarted">
          <Button>Getting started</Button>
        </CustomLink>
        <CustomLink to="/helpCenter/creating">
          <Button>Creating</Button>
        </CustomLink>
        <CustomLink to="/helpCenter/buying">
          <Button>Buying</Button>
        </CustomLink>
        <CustomLink to="/helpCenter/faq">
          <Button>FAQ</Button>
        </CustomLink>
        <CustomLink to="/helpCenter/selling">
          <Button>Selling</Button>
        </CustomLink>
      </div> */}
    </motion.div>
  );
}

const CustomHelpButton = ({ label, icon, to, text }) => {
  const Icon = icon || "span";
  return (
    <CustomLink to={to}>
      <Button className="outlined w100 flex column alignStart-xs textAlign left-xs p4 pt8 pt4-xs">
        <Icon size="3em" />
        <span className="fs-300 fontBold mt2">{label}</span>
        <p className="fs-150 textSecondary pl2 pr2 pl0-xs pr0-xs">{text}</p>

        <span className="mt5 mainColor fs-150">See More</span>
      </Button>
    </CustomLink>
  );
};
