import React from 'react'
import { TextField } from '@mui/material';

export default function AddressForm({disabled, borderRadius, primaryColor, secondaryColor}: {disabled: boolean, borderRadius: string, primaryColor: string, secondaryColor: string}) {
    
    const styles={
        borderRadius,
        color: primaryColor,
        backgroundColor: secondaryColor,
    }
  return (
    <>
        <input type="text" 
        className="border-2 border-gray-300 p-2" 
        placeholder="Street Address" 
        disabled={disabled} 
        style={styles}
        />
        <input type="text" 
        className="border-2 border-gray-300 p-2" 
        placeholder="City" 
        disabled={disabled} 
        style={styles}
        />
        <input type="text" 
        className="border-2 border-gray-300 p-2" 
        placeholder="State" 
        disabled={disabled} 
        style={styles}
        />
        <input type="text" 
        className="border-2 border-gray-300 p-2" 
        placeholder="Postal Code" 
        disabled={disabled} 
        style={styles}
        />
        <input type="text" 
        className="border-2 border-gray-300 p-2" 
        placeholder="Country" 
        disabled={disabled} 
        style={styles}
        />
        </>
  )
}
