import Image from 'next/image';
import React from 'react';

const SendBox = () => {
    return (
        <div>
             <div className="flex items-center justify-center h-full">
              <Image
                height={64}
                width={64}
                className="w-48 h-48"
                src="/loading.gif"
                alt="pre-loader"
              />
            </div>
        </div>
    );
};

export default SendBox;