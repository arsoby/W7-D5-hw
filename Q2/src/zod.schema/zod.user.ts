import { TypeOf, z } from "zod";

export const userType = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "يجب عليك كتابة اسم المستخدم",

        invalid_type_error: "الرجاء ادخال نص",
      })
      .min(2, " يجب أن لا يقل اسم المستخدم عن ثلاث خانات"),
   
      password: z
      .number({
        required_error: "حقل كلمة السر ضروري",
        invalid_type_error: " الرجاء ادخال رقم ",
      })
      .max(1000000000, "يجب ألا تزيد كلمة السر عن 1000000000 ")
      .min(8, "يجب ألا تقل كلمة السر عن 8"),
      email:z.string().email(),
      role:z.enum(["Admin" , "User"])
      ,

    age: z
      .number()
      .min(1,"ادخل رقم اكبر من 1"),
  }),
});
export type RegistertypeSchema = TypeOf<typeof userType>["body"];
