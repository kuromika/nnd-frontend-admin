export type notificationColorsType = {
  [index: string]: string;
  error: string;
  warning: string;
  success: string;
};

export const notificationColors: notificationColorsType = {
  error: "bg-[#8C1017]",
  warning: "bg-[#DD8A06]",
  success: "bg-[#4465A1]",
};

export type notificationType = {
  message: string;
  type: string;
};

export const Notification = ({
  message,
  type,
}: {
  message: string;
  type: string;
}) => {
  return (
    <p
      className={`${notificationColors[type]} mt-5 p-2 rounded text-white font-bold text-lg text-center`}
    >
      {message}
    </p>
  );
};
