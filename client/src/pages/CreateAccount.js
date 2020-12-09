import React, { useContext } from "react"
import Form from "react-bootstrap/Form"
import userContext from "../utils/userContext.js"
import Button from "react-bootstrap/Button"

function CreateAccount(){
  const {email, name, userBirthday, userBirthmonth} = useContext(userContext)

  return(
    <>
    <div>
    <Form className="editAccount">
      <Form.Group controlID="formEmail">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control plaintext readOnly defaultValue={email} type="email" />
      </Form.Group>
      <Form.Group controlID="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control defaultValue={name} type="string" placeholder="What should we call you?"/>
      </Form.Group>
      <Form.Group controlID="monthDD">
        <Form.Label>Birth Month</Form.Label>
        <Form.Control as="select" defaultValue={userBirthmonth}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlID="dayDD">
        <Form.Label>Birth Day</Form.Label>
        <Form.Control as="select" defaultValue={userBirthday}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
    </div>
    </>
  )
}

export default CreateAccount;