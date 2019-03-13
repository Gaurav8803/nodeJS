const baseUrl = 'http://localhost:3000';

const getAllEmployee = () => {
    $get.JSON(`${baseUrl}/employee`).then(
        data => {
            console.log(data);
        }
    ).catch(
        err => console.log(err)
    );
}

const userLogin = (user) => {
    $.post(`${baseUrl}/login`,user).then(
        data => {
            console.log(data);
        }
    ).catch(
        err => console.log(err)
    );
}