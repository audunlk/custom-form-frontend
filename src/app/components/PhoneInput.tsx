import React from 'react'
import { MuiTelInput } from 'mui-tel-input';

export default function PhoneInput({ input, phone, handlePhoneNumber, validPhone, disabled }: { input: string, phone: string, handlePhoneNumber: (phone: string) => void, validPhone: boolean, disabled : boolean }) {
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <MuiTelInput
                value={phone}
                onChange={handlePhoneNumber}
                label={input}
                variant="outlined"
                color='primary'
                size='small'
                disabled={disabled}
                error={validPhone ? false : true}
                
            />
        </div>
    )
}
