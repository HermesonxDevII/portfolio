import { Eye, EyeOff } from "lucide-react";

interface ShowPasswordProps {
  showPassword: boolean,
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ShowPassword({ showPassword, setShowPassword }: ShowPasswordProps) {
  return (
    <>
      {showPassword
        ? (
          <EyeOff
            className="absolute cursor-pointer right-2 text-white"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )
        : (
          <Eye
            className="absolute cursor-pointer right-2 text-white"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )
      }
    </>
  )
}
