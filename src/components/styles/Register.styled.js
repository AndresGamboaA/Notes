import styled from 'styled-components';

export const StyledRegister = styled.div`
   height: 100vh;
   display:flex;
   justify-content: center;
   align-items: center;
   &>div {
      display:flex;
      height: auto;
      flex-direction:column;
   }

   h1 {
      text-align: center;
   }

   &>div>form {
      display:flex;
      flex-direction:column;
   }

   & p {
      padding:0;
      margin:0 0;
      height:auto;
      min-height:auto;
   }

   button {
      margin: 10px 0;
      border: 1px solid lightgray;
      border-radius: 6px;
      padding: 8px 8px;
   }

   input {
      margin: 10px 0;
      border: 1px solid lightgray;
      border-radius: 6px;
      padding: 6px 8px;
   }

   input[type="submit"] {
      outline: none;
      border: none;
      padding: 10px;
      border-radius: 8px;
      color: white;
      background-color: blue;
   }

   span {
      color: red;
   }
`
