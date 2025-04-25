// import { useMutation } from '@apollo/client'
// import {
//   Auth_TelegramLoginDocument,
//   MutationAuth_LoginTelegramArgs,
//   MutationResponse,
// } from '@repo/api'
// import { AppStores } from 'src/lib/zustand'

// export function useInitUserToken() {
//   const store = AppStores.useUser()

//   const [mutate] = useMutation<
//     MutationResponse<'auth_loginTelegram'>,
//     MutationAuth_LoginTelegramArgs
//   >(Auth_TelegramLoginDocument)

//   if (process.env.NODE_ENV !== 'development') {
//     return
//   }
//   if (!store.token) {
//     void mutate({
//       variables: {
//         input: {
//           telegramUserId: `${'userInfo!.id'}`,
//           walletAddress: 'address'!,
//         },
//       },
//       onCompleted(data) {
//         store.update({
//           walletAddress: 'address'!,
//           token: data.auth_loginTelegram.token!,
//         })
//       },
//     })
//   }
//   return { d: store.walletAddress }
// }
