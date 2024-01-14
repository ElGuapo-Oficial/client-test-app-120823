export type ExperienceDataProps = {
    id: number;
    company: string;
    years: string;
    stack: string;
    image: string;
  };

export type ExperienceItemProps = {
    item: ExperienceDataProps;
    isActive: boolean;
};

export type CodeSnippetProps = {
    title?: string;
    code: string;
    language: string;
    width?: string;
}

export type SignIn = {
    email: string | null;
    password: string | null;
}

export type SignUp = {
    email: string |null;
    password: string | null;
    confirmPassword?: string | null;
}