/**
 * COPYRIGHT NOTICE Deepen AI, Inc. 2017-2020
 * This software maybe subject to pending patent applications
 */

import axios from 'axios';

const defaultInstance = axios.create({
    headers: {
        common: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
    },
    timeout: process.env.HTTP_CALL_TIMEOUT,
});

export default defaultInstance;
