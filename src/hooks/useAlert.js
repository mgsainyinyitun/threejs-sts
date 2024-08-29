import { useState } from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const showAlert = ({ msg, type = 'danger' }) => {
        setAlert({ show: true, msg, type });
    }

    const hideAlert = () => {
        setAlert({ show: false, msg: '', type: '' });;
    }

    return { alert, showAlert, hideAlert };
}

export default useAlert