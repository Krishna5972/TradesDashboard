import instance from "./axios";

export const fetchPositionHistory = async () => {
  try {
    const data = {
      api_key:
        "ge5i1VBXjCy3eNEvLuPEABcUMEvzOFla0iU7AkeIqo5OADiijC596GBF7opUAxJv",
      secret_key:
        "Sl0uIdRWjrEn1ngBlkjHnWzvNUzZ5Z3guG9i9A3vLPbcqqFsqHHHtSpRqZk4V17k",
    };

    const response = await instance.post("/mockdata/getPositionHistory", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};
