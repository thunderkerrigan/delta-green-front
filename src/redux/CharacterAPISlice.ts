import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { CharacterModel } from 'delta-green-core/src/models/CharacterModel'
// import { characterSlice } from './CharacterSlice'
const baseUrl = 'http://localhost:33582/api/v1/character'

// Define a service using a base URL and expected endpoints
export const CharacterAPI = createApi({
  reducerPath: 'CharacterAPI',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getNewCharacter: builder.query<CharacterModel, void>({
      query: () => 'randomCharacter',
    }),
    addCharacterToUser: builder.mutation<
      CharacterModel,
      Partial<CharacterModel>
    >({
      query(body) {
        return {
          url: 'add',
          method: 'PUT',
          body,
        }
      },
    }),
    removeCharacterToUser: builder.mutation<CharacterModel, string>({
      query(body) {
        return {
          url: 'remove',
          method: 'PUT',
          body,
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  endpoints,
  useGetNewCharacterQuery,
  useLazyGetNewCharacterQuery,
  useAddCharacterToUserMutation,
  useRemoveCharacterToUserMutation,
} = CharacterAPI
// export const postApi = createApi({
//     reducerPath: "postsApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "/" }),
//     entityTypes: ["Posts"],
//     endpoints: (build) => ({
//       getPosts: build.query<PostsResponse, void>({
//         query: () => "posts",
//         provides: (result) => result.map(({ id }) => ({ type: "Posts", id }))
//       }),
//       addPost: build.mutation<Post, Partial<Post>>({
//         query(body) {
//           return {
//             url: `posts`,
//             method: "POST",
//             body
//           };
//         },
//         invalidates: ["Posts"]
//       }),
//       getPost: build.query<Post, number>({
//         query: (id) => `posts/${id}`,
//         provides: (_, id) => [{ type: "Posts", id }]
//       }),
//       updatePost: build.mutation<Post, Partial<Post>>({
//         query(data) {
//           const { id, ...body } = data;
//           return {
//             url: `posts/${id}`,
//             method: "PUT",
//             body
//           };
//         },
//         invalidates: (_, { id }) => [{ type: "Posts", id }]
//       }),
//       deletePost: build.mutation<{ success: boolean; id: number }, number>({
//         query(id) {
//           return {
//             url: `posts/${id}`,
//             method: "DELETE"
//           };
//         },
//         invalidates: (_, id) => [{ type: "Posts", id }]
//       })
//     })
//   });
