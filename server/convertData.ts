const convertData = (data: any) => {
    let result = {};
    const keys = Object.keys(data);

    keys.forEach(key => {
        result[key] = data[key].edges[0]?.node;
    });

    return result;
};

export default convertData;
