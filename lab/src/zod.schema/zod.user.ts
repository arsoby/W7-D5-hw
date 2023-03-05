import { TypeOf, z } from "zod";

export const registertype = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "يجب عليك كتابة الاسم",

        invalid_type_error: "الرجاء ادخال نص",
      })
      .min(2, " يجب أن لا يقل اسم المستخدم عن ثلاث خانات"),
    genre: z.enum(["Drama", "Action", "Comedy"]),
    rating: z
      .number({
        required_error: "حقل التقييم ضروري",
        invalid_type_error: " الرجاء ادخال رقم للتقييم",
      })
      .max(5, "يجب ألا يزيد التقييم عن 5 ")
      .min(1, "يجب ألا يقل التقييم عن 1"),
    duration: z
      .number({
        required_error: "حقل المدة الزمنية ضروري",
        invalid_type_error: " الرجاء ادخال رقم للمدة الزمنية",
      })
      .min(61,"ادخل رقم اكبر من 60"),
  }),
});
export type RegistertypeSchema = TypeOf<typeof registertype>["body"];
