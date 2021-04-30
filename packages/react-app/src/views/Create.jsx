import React, { useMemo, useCallback } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { mainStyles } from '../layout/PageStyles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomIcons from '../assets/icons';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const useStyles = makeStyles((theme) => ({
  pageDesc: {
    fontSize: '1em',
    lineHeight: '1.6'
  }
}));

export default function Create({address, tx, writeContracts }) {
  const mainClasses = mainStyles();
  const classes = useStyles();

  // const [newPurpose, setNewPurpose] = useState("loading...");
  // <Input onChange={(e)=>{setNewPurpose(e.target.value)}} />

  const onSubmit = async values => {
    console.log("form values", values);
    createTrust(values);
  }

  // const addresses = useMemo(() => getAccountsFrom(values), [values])
  const initialFormState = { trustees: [ { address: address } ]};

  // console.log(initialFormState);
  const required = value => (value ? undefined : 'Required')

  function createTrust(trustData) {
    console.log("trustData", trustData);
    console.log("writeContracts", writeContracts);
    const trustCreation = {
      _owners: trustData.trustees,
      _threshold: 2,
      to: 0x0000000000000000000000000000000000000000,
      data: 0x0000000000000000000000000000000000000000,
      fallbackHandler: 0x6e165b6Ab69E25A12aaEa4AcCB1Ea8d39c7a42E3,
      paymentToken: 0x0000000000000000000000000000000000000000,
      payment: 0,
      paymentReceiver: 0x0000000000000000000000000000000000000000
    };
    console.log("trustCreation", trustCreation);
    /// @param _owners List of Safe owners.
    /// @param _threshold Number of required confirmations for a Safe transaction.
    /// @param to Contract address for optional delegate call.
    /// @param data Data payload for optional delegate call.
    /// @param fallbackHandler Handler for fallback calls to this contract
    /// @param paymentToken Token that should be used for the payment (0 is ETH)
    /// @param payment Value that should be paid
    /// @param paymentReceiver Adddress that should receive the payment (or 0 if tx.origin)
    return tx( writeContracts.GnosisSafe.setup(
      ["0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA", "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"], // List of trust beneficiaries
      2, // number of confirmations required
      "0x0000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000",
      "0x50E1f23d02AE0Ae2717E1d72334efc7D673FAa42", // Address of DefaultCallbackHandler contract
      "0x0000000000000000000000000000000000000000",
      0,
      "0x0000000000000000000000000000000000000000"
    ) );
  }

  const CreateForm = useCallback(() => {
    return (
      <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      // initialValues={initialFormState}
      render={({ handleSubmit, form: { mutators: { push, pop } }, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid item md={12}>
            <Grid container alignItems="center">
              <Grid item className={mainClasses.pageTitleHold}><div className={mainClasses.pageTitle}>Create a trust</div></Grid>
              <Grid item><div className={mainClasses.pageDesc}>Create a new trust for your family, friends, business, charity or organisation.</div></Grid>
            </Grid>
            <Grid spacing={3} container direction="column" alignItems="stretch" className={mainClasses.cardHold}>
              <Grid item className={mainClasses.cardTitle}>
                Trust Details
              </Grid>
              <Grid item>
                <Grid container alignItems="flex-start">
                  <Grid xs={12} sm={6} item>
                    <Field name="trustname" validate={required}>
                      {({ input, meta }) => (
                        <div className={mainClasses.inputHld}>
                          <label>Trust Name</label>
                          <input {...input} type="text" placeholder="Trust Name" className={mainClasses.textInput} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Field
                      name="trustdescription"
                      render={({ input, meta }) => (
                        <div className={mainClasses.inputHld}>
                          <label>Trust description</label>
                          <input type="text" placeholder="Trust description" {...input} className={mainClasses.textInput} />
                          {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={3} alignItems="stretch">
                  <Grid xs={12} sm={6} item>
                    <Grid container direction="column" alignItems="stretch" className={mainClasses.cardHold}>
                      <Grid item className={classes.cardIcon}>
                        <CustomIcons.PeopleIcon style={{ color: "#7131ff", width: '22px', height: '22px' }} />
                      </Grid>
                      <Grid item className={mainClasses.cardTitle}>
                        Nominate trustees
                      </Grid>
                      <Grid item className={mainClasses.cardDesc}>
                        Trustees have authority over the trust operation and rules.<br />This can be changed later.
                      </Grid>
                      <Grid item className={classes.cardButton}>
                        <FieldArray name="trustees">
                          {({ fields }) =>
                            fields.map((name, index) => (
                              <div key={name}>
                                <label>{index + 1}. </label>
                                <Field
                                  name={`${name}.address`}
                                  component="input"
                                  placeholder="Enter address"
                                  className={mainClasses.textinput}
                                />
                                <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }} >
                                  <CustomIcons.CloseIcon style={{ color: "#ff2b2b", width: '16px', height: '16px' }} />
                                </span>
                              </div>
                            ))
                          }
                        </FieldArray>
                        <Button type="button" onClick={() => push('trustees', undefined)} color="primary" variant="outlined" className={mainClasses.borderButton}>
                          <Grid container spacing={1} alignItems="center">
                            <CustomIcons.AddIcon style={{ color: "#fff", width: '14px', height: '13px' }} />
                            <Grid item>
                              Add trustee
                            </Grid>
                          </Grid>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Grid container direction="column" alignItems="stretch" className={mainClasses.cardHold}>
                      <Grid item className={classes.cardIcon}>
                        <CustomIcons.PeopleIcon style={{ color: "#7131ff", width: '22px', height: '22px' }} />
                      </Grid>
                      <Grid item className={mainClasses.cardTitle}>
                        Nominate beneficiaries
                      </Grid>
                      <Grid item className={mainClasses.cardDesc}>
                        Beneficiaries have no authority but can receive benefits.<br />This can be changed later.
                      </Grid>
                      <Grid item className={classes.cardButton}>
                        <FieldArray name="beneficiaries">
                          {({ fields }) =>
                            fields.map((name, index) => (
                              <div key={name}>
                                <label>{index + 1}. </label>
                                <Field
                                  name={`${name}.address`}
                                  component="input"
                                  placeholder="Enter address"
                                  className={mainClasses.textinput}
                                />
                                <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }} >
                                  <CustomIcons.CloseIcon style={{ color: "#ff2b2b", width: '16px', height: '16px' }} />
                                </span>
                              </div>
                            ))
                          }
                        </FieldArray>
                        <Button type="button" onClick={() => push('beneficiaries', undefined)} color="primary" variant="outlined" className={mainClasses.borderButton}>
                          <Grid container spacing={1} alignItems="center">
                            <CustomIcons.AddIcon style={{ color: "#fff", width: '14px', height: '13px' }} />
                            <Grid item>
                              Add beneficiaries
                            </Grid>
                          </Grid>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <div className={mainClasses.infoBox}>
                  There is a fee required to create the trust, fee estimate: <span className={mainClasses.contentHighlight}>[GAS ESTIMATE]</span>.
                  This cost covers all the resources required to validate and confirm the creation of the new trust on the Ethereum network.
                </div>
                <Grid container direction="row" justify="flex-end">
                  <Grid item>
                    <Button type="submit" color="primary" variant="outlined" className={mainClasses.mainButton}>
                      <Grid container alignItems="center">
                        <CustomIcons.TickIcon style={{ color: "#fff", width: '20px', height: '20px' }} />
                        <Grid item>
                          Create trust
                        </Grid>
                      </Grid>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )} />
    )
  }, [mainClasses, classes]);

  return (
      <div className={classes.root}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" component="main" className={mainClasses.pageContent}>
            <Grid container alignItems="center" className={mainClasses.pageNav}>
              <Grid item md={12}>
                <Link
                  className={mainClasses.innerNav}
                  to="#"
                >
                  Manage trusts
                </Link>
                <Link
                  to="/assets"
                >
                  Trust assets
                </Link>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <CreateForm />
            </Grid>
          </Container>
        </React.Fragment>
      </div>
  );
}