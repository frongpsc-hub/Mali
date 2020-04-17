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
        value:'ยืนยันว่าพื้นที่เสียหายไม่อยู่ในเขตประกันภัย'
      }
      this.handleChange=this.handleChange.bind(this);
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
        <h5>ข้อมูลผู้ส่งการยื่นขอความช่วยเหลือ</h5>
        
      <FormGroup>
        <Label>เลขบัญชี</Label>
        <Input
          name="เลขบัญชี"
          placeholder="เลขบัญชี"
          defaultValue="Hello World"
          readOnly={true}
        />
      </FormGroup>
    
        <FormGroup>
        <Label>สำนักงาน ธ.ก.ส.</Label>
        <Input
          name="สำนักงาน ธ.ก.ส."
          placeholder="สำนักงาน ธ.ก.ส."
          defaultValue="Hello World"
          readOnly={true}
        />
       </FormGroup>

        
        <FormGroup>
        <Label>สาขา ธ.ก.ส.</Label>
        <Input
          name="สาขา ธ.ก.ส."
          placeholder="สาขา ธ.ก.ส."
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร</Label>
        <Input
          name="เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร"
          placeholder="เลขที่เอกสารสิทธิ์/เลขทะเบียนการเกษตร"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>ชื่อ</Label>
        <Input
          name="ชื่อ"
          placeholder="ชื่อ"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>

        <FormGroup>
        <Label>นามสกุล</Label>
        <Input
          name="นามสกุล"
          placeholder="นามสกุล"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>เลขประจำตัวประชาชน</Label>
        <Input
          name="เลขประจำตัวประชาชน"
          placeholder="เลขประจำตัวประชาชน"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>ที่อยู่</Label>
        <Input
          name="ที่อยู่"
          placeholder="ที่อยู่"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
        <FormGroup>
        <Label>ตำบล</Label>
        <Input
          name="ตำบล"
          placeholder="ตำบล"
          defaultValue="Hello World"
          readOnly={true}
        />
        </FormGroup>
        
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
        <Label>เลขไปรษณีย์</Label>
        <Input
          name="เลขไปรษณีย์"
          placeholder="เลขไปรษณีย์"
          defaultValue="Hello World"
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
        <Label>โปรดเลือกประเภทภัย</Label>
        <Input
          name="โปรดเลือกประเภทภัย"
          placeholder="ภัยแล้ง"
          defaultValue="Hello World"
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
  