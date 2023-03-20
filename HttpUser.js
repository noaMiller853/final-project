import axios from 'axios';

export const APIUser = (props) => {

    const login = (tz, password, isManager) => {
        axios.post(`https://localhost:44351/api/auth/login`, { tz, password, isManager }).then(res => {
            alert(res)

        }).catch((err) => {
            alert(err, "we have error")
        })
    }
    const loginStudent = (tz, password) => {
        // var response = axios.post(`https://localhost:44351/api/auth/login`, { tz, password }).then(res => {
        //     alert(res)

        // }).catch((err) => {
        //     alert(err, "we have error")
        // })
        // return response.data;

        return [
            {
                "StudId": 3,
                "StudTZ": "147289485",
                "StudName": "sari fux",
                "StudAddress": "haziyit 9",
                "StudPhone": "0583298748",
                "StudMail": "sarifux748@gmail.com",
                "ClassPass": 67676,
                "BehaviorDate": "2006-05-08T21:00:00.000Z"
                , "BehavId": 3
            },
            {
                "StudId": 3, "StudTZ": "147289485",
                "StudName": "sari fux",
                "StudAddress": "haziyit 9",
                "StudPhone": "0583298748",
                "StudMail": "sarifux748@gmail.com",
                "ClassPass": 67676,
                "BehaviorDate": "2006-08-31T21:00:00.000Z",
                "BehavId": 3
            }
        ]

    }

    const getDataForChart = () => {
        // const response =  axios.post(`https://localhost:44351/api/auth/getDataForChart`).then(res=>{
        //     alert(res)

        // }).catch((err)=>{
        //     alert(err, "we have error")
        // });
        // return response.data;

        //זה לא קריאה אמיתית
        var data = [
            { label: "שלום כהן", y: 1 },
            { label: "יהודה לוי", y: 2 },
            { label: "נתי חבשוש", y: 3 },
            { label: "פנחס בכר", y: 4 },
            { label: "ירחמיאל דנון", y: 1 },
            { label: "טוביה נקש", y: 4 },
            { label: "מיכה סבג", y: 3 },
            { label: "גדי שרייבר", y: 2 },
            { label: "אלי מארוקו", y: 4 },
            { label: "ראובן כגן", y: 1 },
            { label: "שמעון טוויל", y: 3 },
            { label: "לוי ירושלמי", y: 2 },
            { label: "יהודה שקרקה", y: 1 },
            { label: "יששכר מצגר", y: 4 },
            { label: "זבולון פרקש", y: 3 },
            { label: "אשר אבלס", y: 4 },
            { label: "זאב פרנקל", y: 1 },


        ];
        return data;
    }

    const addStudent = (data) => {
        axios.post("https://localhost:44351/api/Students", data).then((res) => {
            alert(res)
        }).catch((errors) => alert(errors, "this is a error"))
    }

    const addStudentDetails = (data) => {
        axios.post("https://localhost:44351/api/Students/Details", data).then((res) => {
            alert(res)
        }).catch((errors) => alert(errors, "this is a error"))
    }

    const addTeacher = (data) => {
        axios.post(`https://localhost:44351/api/teachers`, data).
            then(res => { alert(res) }).catch((errors) => {
                alert(errors, "we have error to register teacher")
            })
    }

    const removeTeacher = (data) => {
        axios.post(`https://localhost:44351/api/teachers/removeTeacher`, data).
            then(res => { alert(res) }).catch((errors) => {
                alert(errors, "we have error to remove teacher")
            });
    }

    const removeStudent = (data) => {
        axios.post(`https://localhost:44351/api/student/removeStudent`, data).
            then(res => { alert(res) }).catch((errors) => {
                alert(errors, "we have error to remove student")
            });
    }

    const getDataForPie = (data) => {
        // const response =  axios.post(`https://localhost:44351/api/auth/getDataForPie`).then(res=>{
        //     alert(res)

        // }).catch((err)=>{
        //     alert(err, "we have error")
        // });
        // return response.data;

        //זה לא קריאה אמיתית
        var data = [
            { y: 3, label: "Health" },
            { y: 7, label: "Education" },
            { y: 5, label: "Career" },
            { y: 0, label: "Family" },
        ];
        return data
    }
    const getAmountBadBehavior = (data) => {
        const response = axios.post(`https://localhost:44351/api/student/getAmountBadBehavior`).then(res => {
            alert(res)

        }).catch((err) => {
            alert(err, "we have error")
        });
        return response.data;
    }
    return { login, loginStudent, getDataForChart, addStudent, addStudentDetails, addTeacher, removeTeacher, removeStudent, getAmountBadBehavior }
}