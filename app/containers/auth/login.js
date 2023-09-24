import React from 'react'
import {TextField, Button} from '~/KIT'
export default function Login() {
  return (
    <div className='flex alignCenter justifyCenter' style={{minHeight: '100vh'}}>
        <form className='surface-1 p3 radius-2 shadow-1 flex column'>
            <TextField
                label="Enter token"
                placeholder="Get token from Reza"
            />

            <Button className="mt3">
                Gir ichari
            </Button>
        </form>
    </div>
  )
}
