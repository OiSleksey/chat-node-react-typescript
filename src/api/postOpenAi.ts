import axios from 'axios';

// // With server
// const url: string | undefined = process.env.REACT_APP_BASE_URL;

// interface ResponseServer {
//   message: string;
// }

// export const postRequest = async (message: string): Promise<string> => {
//   try {
//     const response = await axios.post<ResponseServer>(
//       url!,
//       { message },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data.message;
//   } catch (error) {
//     console.error(error);
//     return 'Sorry. An error occurred on the server. We are working on it. Please try again later.';
//   }
// };

//Without server
export const postRequest = (message: string): Promise<string> => {
  return new Promise(function (res, rej) {
    setTimeout(
      () =>
        res(
          'Implementation of ChatGpt response. There has been some delay in response. For a complete check of the chat - I recommend going to my github and reading Readmy.md to check the server as well. With the greatest blessings, your Oleksiy.)'
        ),
      2000
    );
    // setTimeout(
    //   () =>
    //     rej(
    //       'Sorry. An error occurred on the server. We are working on it. Please try again later.'
    //     ),
    //   2000
    // );
  });
};
