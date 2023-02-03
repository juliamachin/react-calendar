import "./Home.css";
import Calendar from "react-calendar";

const Home = () => {
  return (
    <div className="calendar">
      <div>
        <Calendar />
      </div>
      <form>
        <label htmlFor="cycle">Cycle Length: </label>
        <select
          className="cycle-selection"
        >
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
