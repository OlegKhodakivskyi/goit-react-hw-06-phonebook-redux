import React from "react";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/phoneBookActions/phoneBookActions";

const Filter = ({ value, onChangeFilter }) => (
  <>
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => {
          // console.log(e.target.value);
          onChangeFilter(e.target.value);
        }}
      />
    </label>
  </>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: phoneBookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
