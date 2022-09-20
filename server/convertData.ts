const convertData = (data: any) => {
    let result = {};
    const keys = Object.keys(data);

    keys.forEach(key => {
        const nodes = data[key].edges;
        if (nodes.length > 1) {
            result[key] = {
                items: nodes,
            };
        } else {
            result[key] = nodes[0]?.node;
        }
    });

    return result;
};

export default convertData;
