
import { getAllUser } from '@/libs/actions/user.actions';
import React from 'react';

const TableUser = async () => {

    const user = await getAllUser();
    console.log(user)

    return (
        <div>
            
        </div>
    );
};

export default TableUser;