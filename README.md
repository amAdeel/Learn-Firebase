# Connect realtime databse in firebase with react

# Add Data
## step 01 
Create a input form by getting values from user . and at last we create a submit button on submit button we call a function like ... onSubmit={submithandle} . that do sum functionality , we also create a state the values we received from data-form we pass to state , (e)=>setName(e.target.value), it's pass the current value typing in input section into state then we use this state for further use . 
## step 02
SubmitHandle function ko hum default behaviour remove kar rehy hai  by applying this 

```bash
(e)=>{
    e.preventDefault();
```  
beacuse react by default state ko sath sath update karta hai but we want State last par ak sath update ho ,

## step 03
In AddStudent.js file Now we want to add data in firebase database ,There are two type of Database in firebase ,
1. Realtime Database
2. FireStore Datebase
first we learn Realtime Database , How to add data , 2nd how to Fetch data, and how to update and delete the data.

now we add the data in realtime database , for that we need three or 4 thing that we want ti import 
```bash
  import {getDatabase,ref,set} from 'firebase/database'
   // And App file that contain all the config detail of fire base
```
first we create a instance for link our fire and date to datebase , getDatabase(app) connect our file to that specific database  
```bash
   const db=getDatabase(app)
```   
Second thing we now add data for that we use set() methode of firebase in which we provide ref() and in ref we provide db(that is instance) and folder name in which data is store and 3rd id ,like in database student is the folder and the id is the data of specific person .
```bash
   set(ref(db,'students/'+id),{
      studentName:name,
      studentid:id,
      studentClass:stuclass,
      studentGmail:gmail,
      studentNumber:number
    })
```
By this our Data is easily add in realtime database .


# Fetch Data 

## step 01
Create a component ListStudent.js , Here we import we things from Firebase 
```bash
import { getDatabase,ref,onValue } from 'firebase/database'

```
use useEffect here beacuse we know when we something on ui at the time of reload and first time and according to requirment we use useEffect.
```bash
Syntax
useEffect(()=>{
   // Main code is here
},[// dependencies])
```
## step 02
in useEffect we fetch data from database for that we create a db(instance) that link this page to database in which data stored , and then use ref() in which we use this db and folder name (this ref pointing toward the data like say this is the actuall data that we gat), after that we use another firebase element that is OnValue() in onvalue first thing comes that ref and the 2nd thing we provide is the arrow function which get and store the value in useState.
```bash
  // step-06  now we want k jo data hum ny send kiya hai database me set kiya hai os ko yaha par fetch kar k dehkna hai  . is k liy hum useEffect ka use kary g , q k ya reload hoty time kuch data ya kuch effect shoe karvy ga .
useEffect(()=>{
  //first we create instance 
  const db=getDatabase(app)
  //we use ref mean kaha sy data pick karna hai
  const studentRef=ref(db,'students')
  onValue(studentRef,(snapshort)=>{
    const data=snapshort.val()
    console.log(data);
    setGetdata(data)
    
  })
},[])
```

## step 03
if everything done perfectely then the data is easily showing in console , after that now time to show this data in ui , the data we get from it's a object with multiplay value so first we use Object.entires(pass the data) this methode return a array with to values [kay,value], basically we use "entires" mehode here that return a each element of object sparately and then we map each one and pass value , 
```bash
            {Object.entries(getdata).map((key,value)=>{
              return(
                <div key={key} style={{border: '2px solid royalblue', margin:10}}>
                  <ul>
                    <li>Name : {value.studentName}</li>
                    <li>Number: {value.studentNumber}</li>
                    <li>Gmail: {value.studentGmail}</li>
                    <li>Class: {value.studentClass}</li>
                    <li>ID: {value.studentid}</li>
                    </ul>
```
in the above code you see in entries methode we pass getdata and then .map this, we also know enity return a array in which 2 array values comes so we pass key,value 


## step 04 
we also use here useNavigate() which is react hook methode that import from react-router-dom ,               
```bash
import {useNavigate} from react-router-dom
const navigate=useNavigate()
navigate('/path')
```

# Delete Data
## step 01
 we add a button after getting data of each one , and onClick we call a function that delete the data of student . and for delete the data of specific student we need a specific key of that data 
 ```bash
    <button onClick={()=>{deletestudent(key)}} style={{marginLeft:'auto',display:'flex',marginRight:10,marginBottom:10}}>Delete Student</button>
```
## step 02
create a funtion DeleteStudent() in this function we done same working first connect with database by creating a instance and then create a ref that refernce that specific data and then use firebase remove() and remove this data easily .
```bash
import {remove} from 'firebase/database'
const deletestudent=(key)=>{
  const db=getDatabase(app)
  const studentRef=ref(db,'students/'+key)
  remove(studentRef)
  }
```
# Updata data
## step 01
for update data we create another button for button data , for that purpose we want to open a form again in which we updata data easily , we create another component and Add it path in app.js file where all the path is define , on Button click we want to move to this component for that we use useNavigate()and navigate on this component onClick , And one more thing comes here the data that we want to update is already set on this component form input field But data we fetch data in this file not in new component file (updataData.js)  for data problem we also send data in state that we  get in other file , where we use "useLocation" that tell us the data that we pass in state and location and other thing we get data from this .

```bash
<button onClick={()=>{navigate('/UpdateData',{state:[key,value]})}} style={{display:'flex',marginRight:10,marginBottom:10}}>Update Student</button>

```
key is the unique Id and the value is the all the data that are present in this key in Array Formate .

## step 02
Go to UpdateData.js fire in this file we import useLocation hook to get that in this file . and updata the useSate value beacuse we want this value is set in input fied , and it's that value that we import from listStudent.js file in the form of State:[key,value], now get this like " location.state[1].studentname " in this code we say go location then state and then goes to array 1st index and showing value of StudentName . 
```bash
  const location=useLocation()// ya humay file ki location or baki detail bata hai or dosre component me data bi store karvata hai by this 

  const[name,setName]=useState(location.state[1].studentName)//this mean go to locatin here found  state[] and by passing 1 mean goes to first index [key,value] first index par value ka object hai waha sy hum values get kar rehy hai 
  const[id,setId]=useState(location.state[1].studentid)
  const[stuclass,setStuclass]=useState(location.state[1].studentClass)
  const[gmail,setGmail]=useState(location.state[1].studentGmail)
  const[number,setNumber]=useState(location.state[1].studentNumber)
```
## step 03 
Now the value is set in name state , we use this in input in form like value={name}
```bash
          <input
            type="text"
            name="studentName"
            value={name}
            placeholder="Enter student name"
            onChange={(e)=>setName(e.target.value)}
            required
          />

```

# Connect FireStore database with react .

# Add Data
 we create a folder in component (fireStore database) and now add component in this file for easily make differnce among both database
 ## step 01 
 for add data we import few thing getFirestore, collection ,and third is addDoc from the firebase/firestore , in firestore data base data is stored in the form of doc but in realtime database data is store in the form of tree like structure ,now we discuss each on why we use this
 1. (getFirestore) : it's used for intilize the database by which we want to connect 
 ```bash
 const db=getfirestore(app)
 ```
 2. (collection) : that used in firestore database for select a group or collection , in firestore datebase data stored in the form of document so "collection' is used for create a folder in which all the data relative to it is store .
 ```bash
 collection(db,'foldername')
 ```
 3. (addDoc) : is used for add new document in database 

 ```bash
 const submithadle=async(e)=>{
    e.preventDefault();
    // add code for adding data in firestore database
    const db=getFirestore(app)
    const docRef=await addDoc(collection(db,'faculty'),{
        facultyName:name,
        facultyId:id,
        facultyDesination:stuclass,
        facultyNumber:number

    })
```

# Fetch data in Firestore database
we use here getfirestore(),collection,getdocs and docs
1. getdocs() : is used to fetch multiple document fom the collect Example: Suppose you have a collection called users with multiple documents (each representing a user). To fetch all of them.
2. docs() : this function convert each one in a array, mean store collect data in array 
```bash
    const getdata=async()=>{
        const db=getFirestore(app)
        const facRef=collection(db,'faculty')
        const docSnap=await getDocs(facRef)
        const data=docSnap.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))
        setFacdata(data)
    }
```
# Delete Data 
for that we only used 
```bash
deleteDoc(dataRef)
```
# Updata Data 
for updata data we used updataDoc import from firebase/firestore 
```bash
updateDoc(docRef,{facultyName:name,facultyNumber:number,facultyId:id,facultyDesination:stuclass})
```
