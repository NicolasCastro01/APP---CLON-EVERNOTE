import React, { useState } from 'react';
import { Button } from "rbx";
import UserService from '../../../services/user';
import { Redirect } from "react-router-dom";

function UsersDelete() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            UserService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome == true)
        return <Redirect to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir conta
        </Button>
    )
}

export default UsersDelete;