import React, { useEffect, useRef } from 'react'
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { handleCreationObject } from '@/app/lib/utils/handleCreationObject';
import PhoneInput from '../PhoneInput';
import * as InputConfigs from '@/app/lib/Inputs/InputConfig';
import AddressForm from '../AddressForm';
import { inputOrder } from '@/app/lib/Inputs/InputOrder';

export default function FormPreview({ formRecipe, setPayload }: { formRecipe: string[], setPayload: React.Dispatch<React.SetStateAction<object>> }) {
    const [title, setTitle] = useState<string>('Enter your title');
    const [customStyles, setCustomStyles] = useState({
        borderRadius: 10,
        primaryColor: '#000000',
        secondaryColor: '#ffffff',
        width: 200,
    });
    const inputConfigs = Object.values(InputConfigs)
    const [disabled, setDisabled] = useState<boolean>(true);
    const [requiredInputs, setRequiredInputs] = useState<string[]>(formRecipe);
    const [columns, setColumns] = useState<string[]>(formRecipe);
    const sortedInputs = formRecipe
        .sort((a, b) => inputOrder.indexOf(a) - inputOrder.indexOf(b));

    useEffect(() => {
        if (formRecipe.includes('Address')) {
            const filtered = formRecipe.filter((input) => input !== 'Address')
            setColumns([...filtered, 'Street Address', 'City', 'State', 'Postal Code', 'Country'])
        } else {
            setColumns(formRecipe)
        }
    }, [formRecipe]);

    useEffect(() => {
        setPayload(handleCreationObject(title, inputConfigs, requiredInputs, columns));
    }, [columns, setPayload, requiredInputs]);


    const handleRequiredInputs = (input: string) => {
        if (requiredInputs.includes(input)) {
            setRequiredInputs(requiredInputs.filter((requiredInput) => requiredInput !== input))
        } else {
            setRequiredInputs([...requiredInputs, input])
        }
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setCustomStyles((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleTitleChange = (e: any) => {
        const { value } = e.target;
        setTitle(value);
    };


    return (
        <div className='flex flex-col flex-grow items-center w-full h-full'>
            <div className='mt-12'>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter your title"
                    maxLength={30}
                    className="bg-transparent p-2 text-xl font-bold text-center w-full border-b-2 border-gray-300 focus:outline-none"
                    onFocus={title === 'Enter your title' ? () => setTitle('') : () => { }}
                />
                {/* <label>
                    Border Radius:
                    <input
                        type="range"
                        name="borderRadius"
                        min="0"
                        max="20"
                        value={customStyles.borderRadius}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Primary Color:
                    <input
                        type="color"
                        name="primaryColor"
                        value={customStyles.primaryColor}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Secondary Color:
                    <input
                        type="color"
                        name="secondaryColor"
                        value={customStyles.secondaryColor}
                        onChange={handleInputChange}
                    />
                </label> */}

            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                 {/* <div className="flex flex-col items-center justify-center">
                     <GetUrlStyles setStyleObject={setStylesObject}/> 
                </div>  */}
                <div className="flex flex-col p-6 gap-4 justify-center"
                    style={{
                        backgroundColor: `${customStyles.secondaryColor}`,
                        borderRadius: `${customStyles.borderRadius}px`,
                    }}>
                    {sortedInputs.map((input, index) => (
                        <div key={index} className="flex flex-row items-center justify-center gap-4 p-2 border-grey  w-full"
                            style={{
                                backgroundColor: `${customStyles.secondaryColor}`,
                                borderRadius: `${customStyles.borderRadius}px`,
                            }}>
                            {input !== "Address" &&
                                <div className="flex flex-col justify-center text-start">
                                    <label className='text-sm font-semibold text-gray-500 mb-2'>
                                        {input}
                                    </label>
                                    <input
                                        type="text"
                                        className="border-2 border-gray-300 p-2"
                                        placeholder={input}
                                        style={{
                                            borderRadius: `${customStyles.borderRadius}px`,
                                            color: `${customStyles.primaryColor}`,
                                            backgroundColor: `${customStyles.secondaryColor}`
                                        }}
                                        disabled={disabled} />
                                        <FormControlLabel
                                    control={<Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        size='small'
                                        onChange={() => handleRequiredInputs(input)}
                                    />}
                                    label="Required" />
                                </div>
                            }
                            {input === "Address" &&
                                <div
                                    className="flex flex-col justify-center gap-4">
                                    <label className='text-sm font-semibold text-gray-500'>
                                        {input}
                                    </label>
                                    <AddressForm
                                        disabled={disabled}
                                        borderRadius={`${customStyles.borderRadius}px`}
                                        primaryColor={customStyles.primaryColor}
                                        secondaryColor={customStyles.secondaryColor}
                                    />
                                    <FormControlLabel
                                    control={<Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        size='small'
                                        onChange={() => handleRequiredInputs(input)}
                                    />}
                                    label="Required" />
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



