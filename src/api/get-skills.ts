import client from "./client";
import { SkillCategoryEntrySkeleton, SkillEntrySkeleton } from "./types";

const getSkills = async () => {
  const [{ items: skills }, { items: skillCategories }] = await Promise.all([
    client.getEntries<SkillEntrySkeleton>({
      content_type: "skill",
      "fields.category[exists]": true,
      order: ["-fields.proficiency", "fields.name"],
    }),
    client.getEntries<SkillCategoryEntrySkeleton>({
      content_type: "skillCategory",
      order: ["-fields.proficiency", "fields.name"],
    }),
  ]);

  return skillCategories.map((skillCategory) => ({
    id: skillCategory.sys.id,
    name: skillCategory.fields.name,
    skills: skills
      .filter((skill) => skill.fields.category?.sys.id === skillCategory.sys.id)
      .map((skill) => skill.fields.name),
  }));
};

export default getSkills;
