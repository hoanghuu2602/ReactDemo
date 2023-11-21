import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Profile() {
    const history = useHistory();

    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push('/home')
        }
    }, [])


    return (
        <h1>Trang Profile</h1>
    );
}

export default Profile;