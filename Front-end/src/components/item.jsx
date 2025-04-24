import React from "react";

const item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="./src/components/img/carousel-1.jpg"
        alt="img da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Tarumã, Sítio Tiú</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          aliquam corporis tempora illum! Voluptate sunt nam est nemo molestias,
          dignissimos itaque pariatur consectetur nihil necessitatibus tempora
          ratione? Unde, at et.
        </p>
      </div>
      <p>
        <span className="font-semibold"> R$ 550</span> por noite
      </p>
    </a>
  );
};

export default item;
