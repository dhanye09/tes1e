'use client';

import { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid'
 
export default function ShareLinkButton() {

    const [clicked, setCLicked]=useState(false);

    const handleClick1 = () => {
        navigator.clipboard.writeText(window.location.href);
        setCLicked(true);
        setTimeout(()=> setCLicked(false),1500);
    };

    return (
        <button onClick={handleClick1} className="flex gap-1 items-center border mb-2 px-2 py-1 rounded text-slate-500 text-sm bg-orange-100 hover:bg-orange-200 hover:text-slate-700">
            <LinkIcon className="h-4 w-4" />
            {clicked? 'Link Copied': 'Share Link'}
        </button>
    );
}