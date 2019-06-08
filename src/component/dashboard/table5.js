import React from 'react';
import Component from "@reactions/component";
import { toaster, TextInput, Pane, Dialog } from 'evergreen-ui';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table5 extends React.Component {
    constructor() {
        super();
        this.state = {
            category: [],
            cateSelect: '',
            addCategory: '',
        }
    }
    componentDidMount() {
        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })
    }
    addCategory() {
        let formData = new FormData();

        formData.append("name", this.state.addCategory);

        axios({ url: host + "api/course/addCategory", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful")
                    window.location.reload();
                }
            })
            .catch((error) => { toaster.danger(error.request.response) })
    }

    editCategory() {
        let formData = new FormData();
        formData.append("name", this.state.editCategory);

        axios({ url: host + "api/course/editCategory/" + this.state.cateSelect, method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful")
                    window.location.reload();
                }
            })
            .catch((error) => { toaster.danger(error.request.response) })
    }
    render() {
        return (
            <div>
                <div id='CateNewDashContiner'>
                    <Component initialState={{ isShown: false }}>
                        {({ state, setState }) => (
                            <Pane>
                                <Dialog
                                    isShown={state.isShown}
                                    title="Add Category"
                                    onCloseComplete={() => setState({ isShown: false })}
                                    confirmLabel="Save"
                                    onConfirm={() => {
                                        this.addCategory()
                                        setState({ isShown: false })
                                    }}
                                >
                                    <TextInput width='75%' name="text-input-name"
                                        placeholder="input name of Category..."
                                        onChange={(event) =>
                                            this.setState({ addCategory: event.target.value })}
                                    />
                                </Dialog>
                                <div id='CateBtnDashNew' onClick={() => setState({ isShown: true })}>Add CATEGORY</div>
                            </Pane>
                        )}
                    </Component>
                    
                    <Component initialState={{ isShown: false }}>
                        {({ state, setState }) => (
                            <Pane>
                                <Dialog
                                    isShown={state.isShown}
                                    title="Edit Category"
                                    onCloseComplete={() => setState({ isShown: false })}
                                    confirmLabel="Edit"
                                    onConfirm={() => {
                                        this.editCategory()
                                        setState({ isShown: false })
                                    }}
                                >
                                    <Form>
                                        <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                            <Form.Label >Category</Form.Label>
                                            <Form.Control as="select"

                                                onChange={(even) => {
                                                    if (even.target.value !== 'SelectCategory') {
                                                        this.setState({ cateSelect: even.target.value })
                                                    }
                                                }
                                                }>
                                                <option value="SelectCategory">Select Category </option>
                                                {this.state.category.map(cate =>
                                                    <option key={cate._id} value={cate._id}  >
                                                        {cate.name}
                                                    </option>
                                                )}
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                    <TextInput width='75%' name="text-input-name"
                                        placeholder="input New name of Category..."
                                        onChange={(event) =>
                                            this.setState({ editCategory: event.target.value })}
                                    />
                                </Dialog>
                                <div id='CateBtnDashNew' onClick={() => setState({ isShown: true })}>Edit CATEGORY</div>

                            </Pane>
                        )}
                    </Component>

                    <div id='CateBtnDashNew'>Delete CATEGORY</div>
                </div>
            </div>
        )
    }
}
export default Table5;