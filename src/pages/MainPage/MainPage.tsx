// const MainPage = () => { //немного ебанутый пример useRef с какого то сайта
//   console.log('Main render!');
//   const [name, setName] = React.useState("Tom");
//   const nameRef = React.useRef(name);
//   console.log('render name: ', name);


//   React.useEffect(() => {

//     nameRef.current = name;
//   }, [name]);

//   React.useEffect(() => {
//     // извлекаем данные из localStorage
//     const userName = localStorage.getItem("userName");
//     // если в localStorage есть такой объект
//     if (userName !== null) {
//       setName(userName);
//       console.log("Got!");
//     }

//     // сохраняем данные в localStorage
//     return () => {
//       console.log(nameRef.current);
//       localStorage.setItem("userName", nameRef.current);
//       console.log("Saved!");
//     };
//   },
//     []); // эффект срабатывает только один раз - при самом первом рендеринге
//   const changeName = (event: any) => setName(event.target.value);

//   return (
//     <div>
//       <h3>Имя: {name}</h3>

//       <div>
//         <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
//         <button >Unmount</button>
//       </div>
//     </div>
//   );
// };

const MainPage = () => {
  // const [num, setNum] = useState(10);

  // const ref = useRef(num);


  // useEffect(() => {
  //   ref.current = num;
  // }, [num]);


  // useEffect(() => {
  //   setInterval(() => {
  //     setNum(ref.current - 1);
  //   }, 1000);
  // }, []);

  // return (
  //   <div>
  //     {num}
  //   </div>
  // );
  return (
    <div>MainPage</div>
  );
};

export default MainPage;