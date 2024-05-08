import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm"
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  // let userId

  // if (typeof userId !== "undefined") {
  //   const { userId: authUserId = "" } = auth() ?? {}

  //   return (user = await getUserById(authUserId || ""))
  // } else {
  //   userId = "2643256360"
  // }
  let user = { _id: "5418125612", creditBalance: 500 }
  const transformation = transformationTypes[type]

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage
