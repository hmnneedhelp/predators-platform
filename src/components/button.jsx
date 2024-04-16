const Button = ({ onClick, text = "Отправить заявку" }) => {
  return (
    <div
      className="flex flex-row justify-center items-center"
      onClick={() => onClick()}
    >
      <div className="w-[15px] h-[64px] bg-orange-600 rounded-l-full"></div>
      <div className="text-lg bg-orange-600 rounded-2xl p-6 ">{text}</div>
    </div>
  );
};
export default Button;
