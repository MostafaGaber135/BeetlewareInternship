async function getJson(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("getJson error:", error);
      throw error;
    }
  }
  
  async function postJson(url, body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("postJson error:", error);
      throw error;
    }
  }
  
  async function putJson(url, body) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("putJson error:", error);
      throw error;
    }
  }
  
  async function deleteJson(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      return response.ok;
    } catch (error) {
      console.error("deleteJson error:", error);
      throw error;
    }
  }
  
  window.httpClient = {
    getJson,
    postJson,
    putJson,
    deleteJson,
  };
  
