import blink from "./../assets/blink.png";

export default function MainText() {
  return (
    <div className="panamaDemo text-[200px] flex flex-row self-center">
      <div className="!w-[50px] brightness-50 text-clip overflow-hidden">Х</div>
      <div className="!w-[50px] brightness-50 text-clip overflow-hidden">Х</div>
      <div className="!w-[50px] brightness-75 text-clip overflow-hidden">Х</div>
      <div className="w-fit relative">
        <img
          src={blink}
          className="absolute top-0 inset-0 ml-[-62px] mt-[-10px]"
          draggable={false}
        />
        <p>ХИЩНИКИ</p>
        <img
          src={blink}
          className="absolute right-0 inset-y-0 mr-[-78px] rotate-[60deg] mt-[100px]"
          draggable={false}
        />
      </div>
      <div className="!w-[50px] ml-[-0px] brightness-75 text-clip overflow-hidden flex justify-center pr-12">
        И
      </div>
      <div className="!w-[50px] brightness-50 text-clip overflow-hidden flex justify-center pr-12">
        И
      </div>
      <div className="!w-[50px] brightness-50 text-clip overflow-hidden flex justify-center pr-12">
        И
      </div>
    </div>
  );
}
