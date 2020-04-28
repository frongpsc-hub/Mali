import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col ,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Gallery from './Gallery';
import Polygon from "assets/img/ขอบแปลง.png";
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Component } from 'react';
import axios from 'axios';


// Unsplash images from the "Adventure" collection
// https://unsplash.com/collections/369/adventure



const THUMBNAIL_IMAGES = [
  { src: 'https://www.thaigreenagro.com/wp-content/uploads/2018/05/%E0%B8%84%E0%B8%B3%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%9B%E0%B8%B8%E0%B9%8B%E0%B8%A2%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7.jpg', caption: '', orientation: 'landscape', useForDemo: true },
  { src: 'https://nuntikanshop.com/wp-content/uploads/2018/10/-e1540746220803.jpg', caption: '', orientation: 'landscape', useForDemo: true },
  { src: 'https://www.thaigreenagro.com/wp-content/uploads/2018/05/%E0%B8%84%E0%B8%B3%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%9B%E0%B8%B8%E0%B9%8B%E0%B8%A2%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7.jpg', caption: '', orientation: 'landscape', useForDemo: true },
  
]



export default class FormPropsTextFields extends Component {
    constructor () {
      super()
  
      this.state = {
        disabled:'disabled',
        value:'ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย',
        amphoe_t: "",
        branch_name: "",
        branch_pro_name: "" ,
        disaster_nameth: "",
        province_t: "",
        status_name: "",
        tambon_t: "",
        warranty_address: "",
        warranty_citizenid: "",
        warranty_dmgdate: "",
        warranty_fname: "",
        warranty_harvestdate: "",
        warranty_id: "",
        warranty_lname: "",
        warranty_no: "",
        warranty_plantdate: "",
        warranty_postalcode: "",
        warranty_status: "",
        warranty_timestamp: "",
        warranty_tgiano:""
      }
      this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount() {
      // this.getAcceptedcount();
   
      this.getwarrantyinfo();
  
  }
  
  getwarrantyinfo = () => {
    axios.get(`http://localhost:3001/api/v1/warrantymoreinfo`, {headers: {"pid": this.props.uid}})
    .then(res => {
      console.log(res.data.Data[0])
      this.setState({
        amphoe_t: res.data.Data[0].amphoe_t,
        branch_name: res.data.Data[0].branch_name,
        branch_pro_name: res.data.Data[0].branch_pro_name ,
        disaster_nameth: res.data.Data[0].disaster_nameth,
        province_t: res.data.Data[0].province_t,
        status_name: res.data.Data[0].status_name,
        tambon_t: res.data.Data[0].tambon_t,
        warranty_address: res.data.Data[0].warranty_address+ " " +res.data.Data[0].warranty_moo+" "+res.data.Data[0].warranty_soi+" "+res.data.Data[0].warranty_road,
        warranty_citizenid: res.data.Data[0].warranty_citizenid,
        warranty_dmgdate: res.data.Data[0].warranty_dmgdate,
        warranty_fname: res.data.Data[0].warranty_fname,
        warranty_harvestdate: res.data.Data[0].warranty_harvestdate,
        warranty_id: res.data.Data[0].warranty_id,
        warranty_lname: res.data.Data[0].warranty_lname,
        warranty_no: res.data.Data[0].warranty_no,
        warranty_plantdate: res.data.Data[0].warranty_plantdate,
        warranty_postalcode: res.data.Data[0].warranty_postalcode,
        warranty_status: res.data.Data[0].warranty_status,
        warranty_timestamp: res.data.Data[0].warranty_timestamp,
        warranty_tgiano:res.data.Data[0].warranty_tgiano
      })
    })
  }
  
   handleChange= (e) => {
    this.setState({
      value: e.target.value
    });
    if(e.target.value === 'ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย'){
      this.setState({
        disabled: 'disabled'
      });
    }
    else{
      this.setState({
        disabled: ''
      });
    }
  }

  render () {
    
  return (
    
     <form>
      <div>
      <Container maxWidth='xl'>
        <Row>
        <Col xl="6">
        <h5>ข้อมูลผู้แจ้งรายงานความเสียหาย</h5>
        
      <FormGroup>
        <Label>เลขบัญชี</Label>
        <Input
          name="เลขบัญชี"
          placeholder="เลขบัญชี"
          defaultValue={this.state.warranty_no}
          readOnly={true}
        />
      </FormGroup>
    
        <FormGroup>
        <Label>สำนักงาน ธ.ก.ส.</Label>
        <Input
          name="สำนักงาน ธ.ก.ส."
          placeholder="สำนักงาน ธ.ก.ส."
          defaultValue={this.state.branch_pro_name}
          readOnly={true}
        />
       </FormGroup>

        
        <FormGroup>
        <Label>สาขา ธ.ก.ส.</Label>
        <Input
          name="สาขา ธ.ก.ส."
          placeholder="สาขา ธ.ก.ส."
          defaultValue={this.state.branch_name}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร</Label>
        <Input
          name="เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร"
          placeholder="เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร"
          defaultValue={this.state.warranty_tgiano}
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>ชื่อ</Label>
        <Input
          name="ชื่อ"
          placeholder="ชื่อ"
          defaultValue={this.state.warranty_fname}
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>นามสกุล</Label>
        <Input
          name="นามสกุล"
          placeholder="นามสกุล"
          defaultValue={this.state.warranty_lname}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>เลขประจำตัวประชาชน</Label>
        <Input
          name="เลขประจำตัวประชาชน"
          placeholder="เลขประจำตัวประชาชน"
          defaultValue={this.state.warranty_citizenid}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>ที่อยู่</Label>
        <Input
          name="ที่อยู่"
          placeholder="ที่อยู่"
          defaultValue={this.state.warranty_address}  
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>ตำบล</Label>
        <Input
          name="ตำบล"
          placeholder="ตำบล"
          defaultValue={this.state.tambon_t}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>อำเภอ</Label>
        <Input
          name="อำเภอ"
          placeholder="อำเภอ"
          defaultValue={this.state.amphoe_t}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>จังหวัด</Label>
        <Input
          name="จังหวัด"
          placeholder="จังหวัด"
          defaultValue={this.state.province_t}
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>เลขไปรษณีย์</Label>
        <Input
          name="เลขไปรษณีย์"
          placeholder="เลขไปรษณีย์"
          defaultValue={this.state.warranty_postalcode}
          readOnly={true}
        />
        </FormGroup>
        </Col>
        <Col xl="6"> 
        <h5>ข้อมูลแปลงเสียหาย</h5>

        <Gallery
      imgs={THUMBNAIL_IMAGES.map(({ caption, src, orientation, useForDemo }) => ({
        src: src,
        thumbnail: src,
        caption,
        orientation,
        useForDemo,
      }))}
      showThumbnails
    />

        <FormGroup>
        <Label>ประเภทภัย</Label>
        <Input
          name="ประเภทภัย"
          placeholder="ภัยแล้ง"
          defaultValue={this.state.disaster_nameth}
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>วันที่เกิดภัยในแปลงของท่าน</Label>
        <Input
          name="วันที่เกิดภัยในแปลงของท่าน"
          placeholder="วันที่เกิดภัยในแปลงของท่าน"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>วันที่เพาะปลูกตามที่ระบุในทะเบียนเกษตรกร</Label>
        <Input
          name="วันที่เพาะปลูกตามที่ระบุในทะเบียนเกษตรกร"
          placeholder="วันที่เพาะปลูกตามที่ระบุในทะเบียนเกษตรกร"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>วันที่แปลงท่านได้รับความเสียหายจนไม่มีผลผลิต</Label>
        <Input
          name="วันที่แปลงท่านได้รับความเสียหายจนไม่มีผลผลิต"
          placeholder="วันที่แปลงท่านได้รับความเสียหายจนไม่มีผลผลิต"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        <Container maxWidth="xd">
        <Row>
        <Col xl="6">   
        <img src={Polygon} alt="..." height= '280' width='280'/>
         </Col>
         <Col xl="6">   
         <h5>ข้อมูลแปลง</h5>
        
        <FormGroup>
        <Label>อำเภอ</Label>
        <Input
          name="อำเภอ"
          placeholder="อำเภอ"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>จังหวัด</Label>
        <Input
          name="จังหวัด"
          placeholder="จังหวัด"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>รหัสไปรษณีย์</Label>
        <Input
          name="รหัสไปรษณีย์"
          placeholder="รหัสไปรษณีย์"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
         </Col>
        </Row>
        </Container>  
        <div>
        <FormControl component="fieldset">
      
      <RadioGroup  value={this.state.value} onChange={this.handleChange} size="small">
        <FormControlLabel value="ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย" control={<Radio />} label="ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย" />
        <FormControlLabel value="ไม่ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย" control={<Radio />} label="ไม่ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย" />
      </RadioGroup>
    </FormControl>
    </div>

        
        <FormGroup>
        <Label for="exampleText">ระบุสาเหตุที่ไม่เป็นพื้นที่ที่อยู่ในเขตประกาศภัย</Label>
        <Input type="textarea" name="text" id="exampleText" disabled={this.state.disabled}/>
      </FormGroup>
       
          
        
        </Col>
        </Row>
        </Container>

        
      </div>
    </form>
  );
}
    }
  