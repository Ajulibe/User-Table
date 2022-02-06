import React from "react";
import { Container } from "./style";
import { NewUserForm } from "./components/form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const NewUser = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.user);

  return (
    <Container>
      <header>Dashboard</header>
      <div className="table__wrapper">
        <div className="table__header">
          <span>Add New User</span>
        </div>
        <NewUserForm dispatch={dispatch} navigate={navigate} state={state} />
      </div>
    </Container>
  );
});

export default NewUser;
