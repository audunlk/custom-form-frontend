'use client'
import React from 'react'
import * as Inputs from '../../lib/Inputs/Inputs'
import { inputOrder } from '../../lib/Inputs/InputOrder'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import { handleMouseMove } from '../../lib/utils/handleMouseMove';
import { handleAddToRecipe } from '@/app/lib/utils/handleAddToRecipe';
import SignIn from '../../auth/signin/page';

export default function CreateForm({ formRecipe, setFormRecipe }: { formRecipe: string[], setFormRecipe: React.Dispatch<React.SetStateAction<string[]>> }) {
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState('');
    const inputs = Object.values(Inputs);
    const orderedInput = inputOrder.map((inputName) => {
        const input = inputs.find((input) => input.desc === inputName);
        if (!input) {
            throw new Error(`Icon ${inputName} not found`);
        }
        return input;
    });
    const tooltips = orderedInput.map((input) => input.tooltip);

    const onMouseMove = (event: React.MouseEvent) => {
        const tooltipPosition = handleMouseMove(event);
        setTooltipPosition(tooltipPosition);
    };


    return (
        <div className='flex flex-col flex-grow justify-center items-center'>
            <div>
                <p className="mt-3 text-2xl">
                    What information would you like to collect?
                </p>
            </div>
            {showTooltip &&
                <div className='absolute z-10 w-64 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg overflow-hidden'
                    style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
                    <HelpOutlineIcon
                        style={{ height: '1rem' }} />
                    {showTooltip}
                </div>}
            <div className="flex flex-wrap gap-4 justify-center items-center mt-6 w-3/5">
                {orderedInput.map((input, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setShowTooltip(tooltips[index])}
                        onMouseLeave={() => setShowTooltip('')}
                        onMouseMove={onMouseMove}
                        onClick={() => handleAddToRecipe(input.desc, formRecipe, setFormRecipe)}
                        className={`flex items-center justify-center border-2 border-gray-300 rounded-3xl hover:transition-transform hover:scale-105 px-10 py-2 ${formRecipe.includes(input.desc) ? 'bg-blue-500' : ''}`}
                    >
                        <div>
                            <p className={`select-none text-lg ${formRecipe.includes(input.desc) ? 'text-white' : 'text-black'}`}>
                                {input.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
