import "./Home.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { format, parse, startOfWeek, getDay } from 'date-fns'
import DatePicker from "react-datepicker";
import Moment from "react-moment";


const Home = () => {
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState(false);
  const [cycle, setCycle] = useState("28");

  const addPeriod = () => {
    setRange(true);
  };

  return (
    <div className="calendar">
      <div>
        <button onClick={addPeriod}>Add Period</button>
        <Calendar onChange="" value={date} selectRange={range} />
      </div>
      <form>
        <label htmlFor="cycle">Cycle Length: </label>
        <select className="cycle-selection">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
        </select>
      </form>
    </div>
  );
};

export default Home;
