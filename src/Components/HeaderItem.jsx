import React from "react";

function HeaderItem({ name, icon: Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;

//name bir string olduğu için direkt {name} şeklinde yazılabilir.
//icon bir component olduğu için icon: Icon şeklinde destructure edilip <Icon /> şeklinde kullanılabilir.
