import React, { useState } from "react";
import { paymentAB } from "../services/api";

function Payment() {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [point, setPoint] = useState("");
  const [message, setMessage] = useState("");

  const _onClick = async () => {
    try {
      const response = await Payment({ id, price, point });
      console.log(response);
      setMessage(response.data === "" ? `'${id}'님이 ${point}를 사용하여 총 ${price}원 결제완료` : "중복된 ID입니다");
      console.log(response.data);
    } catch (error) {
      setMessage("에러 발생");
    }
  };

  return (
    <div>
      <div class="form-group">
        <label>결제</label>
        <h5 style={{ color: "green", marginBottom: "2%" }}>{message}</h5>
        <br />
        Me:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="결제할 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        가격:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="결제 금액"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        사용할 포인트:{" "}
        <input
          className="form-control"
          type="text"
          placeholder="사용할 포인트"
          value={point}
          onChange={(e) => setPoint(e.target.value)}
        />
        <input id="paymentAB" type="submit" value="Invoke" class="btn btn-primary" onClick={_onClick} />
      </div>
    </div>
  );
}

export default Payment;
