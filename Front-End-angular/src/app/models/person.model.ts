import { About } from "./about.model";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { HardSkill } from "./hard-skill.model";
import { Project } from "./project.model";
import { SoftSkill } from "./soft-skill.model";

export interface Person {
    id?: number;
    fullname?: string;
    ocupation?: string;
    intitution?: string;
    url_institution?: string;
    url_pfp?: string;
    url_banner?: string;

    about: About[];
    education: Education[];
    experience: Experience[];
    softskill: SoftSkill[];
    hardskill: HardSkill[];
    project: Project[];

}
