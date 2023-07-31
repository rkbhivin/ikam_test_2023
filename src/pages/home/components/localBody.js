import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "../../../service/api";
import SelectBox from "../../../components/selectBox";

const validationSchema = Yup.object().shape({
  district: Yup.string().required("Required"),
  localBodyType: Yup.string().required("Required"),
  localBodyName: Yup.string().required("Required"),
  zonalOffice: Yup.string().required("Required"),
  wardNo: Yup.string().required("Required"),
});

function LocalBody() {
  const [formData, setFormData] = useState({
    district: [],
    localBodyType: [],
    localBodyName: [],
    zonalOffice: [],
    wardNo: [],
  });

  const dataModel = [
    {
      id: "district",
      endpoint: "your/endpoint/path",
      label: "District",
      name: "district",
    },
    {
      id: "localBodyType",
      endpoint: "your/endpoint/2",
      label: "Local Body Type",
      name: "localBodyType",
    },
    {
      id: "localBodyName",
      endpoint: "your/endpoint/6",
      label: "Local Body Name",
      name: "localBodyName",
    },
    {
      id: "zonalName",
      endpoint: "your/endpoint/7",
      label: "Zonal Name",
      name: "zonalName",
    },
    {
      id: "ward",
      endpoint: "your/endpoint/8",
      label: "Ward Number",
      name: "ward",
    },
  ];

  const initialValues = {
    district: "",
    localBodyType: "",
    localBodyName: "",
    zonalName: "",
  };

  useEffect(() => {
    dataModel.forEach(({ endpoint, name }) => fetchData(endpoint, name));
  }, []);

  const fetchData = (endpoint, name) => {
    Api.get(endpoint)
      .then((response) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: response.data,
        }));
      })
      .catch((error) => {
        console.error("errrrror", error);
      });
  };

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form className="form-control" onSubmit={formik.handleSubmit}>
        <div className="row">
          {dataModel.map(({ id, label, name }) => (
            <div key={id} className="col-md-4 col-lg-4 col-sm-12">
              <SelectBox
                id={id}
                options={formData[name] ?? []}
                label={label}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                isRequired={true}
                error={formik.errors[name]}
                className="select"
                isIdSelect={true}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default LocalBody;
