import Image from "next/image";
import React, { useState } from "react";

const Intigration = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="">
      <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center rounded-2xl bg-pink-300">
        <Image
          src="/ai-integrations.svg"
          alt="banner"
          width={631}
          height={421}
          className="w-full md:w-1/2"
          loading="eager"
          onLoad={(e) => {
            setLoading(false);
          }}
        />

        <article className="grid grid-cols-1 gap-y-4">
          <h3 className="font-bold md:text-2xl lg:text-3xl 2xl:text-5xl text-primary">
            AI Integrations
          </h3>
          <p className="text-sm text-gray-900">
            Connect your preferred platforms seamlessly with our AI to empower
            your chatbot. With real-time data retrieval, enable your AI to
            deliver precise and context-aware responses for an unmatched
            customer experience.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Intigration;
