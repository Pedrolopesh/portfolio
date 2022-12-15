export interface IProblemDescription {
    title: string;
    description: string;
}

export interface ISolutionDescription {
    title: string;
    description: string;
}

export interface IExampleDescription {
    title: string;
    description: string;
    imageUrl: string;
}

export interface IFinalDescription {
    title: string;
    description: string;
}

export interface IProjectInfoItem {
    projectInfo: {
        title: string;
        fisrtDescription: string;
        projectDate: string;
        urlBanner: string;
        problemDescription: IProblemDescription;
        solutionDescription: ISolutionDescription;
        exampleDescription: IExampleDescription;
        finalDescription: IFinalDescription;
    }
}