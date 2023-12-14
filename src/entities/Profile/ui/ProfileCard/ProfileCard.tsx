import { FC, memo } from "react";

import cls from "./ProfileCard.module.scss";

import Input from "@shared/ui/Input/Input";
import { Profile } from "@entities/Profile";
import { Select } from "@shared/ui/Select/Select";
import { Country } from "@shared/consts/common";

interface ProfileCardProps {
  profile: Profile;
  error?: string;
  readOnly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const ProfileCard: FC<ProfileCardProps> = memo(
  ({ profile, readOnly }) => {
    return (
      <>
        <Input
          value={profile?.first}
          className={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={profile?.lastname}
          className={cls.input}
          readOnly={readOnly}
        />
        <Select
          value={profile?.city}
          className={cls.input}
          readOnly={readOnly}
          options={options}
        />
      </>
    );
  }
);
