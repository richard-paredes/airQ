import React, { Dispatch } from 'react';
import { Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { IOpenAQAction, IOpenAQParameters } from '../reducers/OpenAQReducer';

interface MapFormProps {
    openAQParameters: IOpenAQParameters;
    dispatchOpenAQ: Dispatch<IOpenAQAction>;
}

export const MapForm: React.FC<MapFormProps> = ({ openAQParameters, dispatchOpenAQ }) => {
    return (
        <Container maxW="container.md" p="4" my="2">
            <Formik
                initialValues={openAQParameters.locationsParameters}
                onSubmit={(values, actions) => {
                    dispatchOpenAQ({ type: 'UPDATE_LOCATIONS_QUERY', values });
                    setTimeout(() => actions.setSubmitting(false), 500);
                }}
            >
                {(props) => (
                    <Flex justify="center" align="center">
                        <Form>
                            <Flex>
                                <Field name='countryId'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.countryId && form.touched.countryId} isReadOnly isDisabled mx={1}>
                                            <FormLabel htmlFor='countryId'>Country ID</FormLabel>
                                            <Input {...field} id='countryId' placeholder='countryId' />
                                            <FormErrorMessage>{form.errors.entity}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='entity'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.entity && form.touched.entity} mx={1}>
                                            <FormLabel htmlFor='entity'>Entity</FormLabel>
                                            <Select {...field}>
                                                <option value=''>All</option>
                                                <option value='community'>Community</option>
                                                <option value='government'>Government</option>
                                                <option value='research'>Research</option>
                                            </Select>
                                            <FormErrorMessage>{form.errors.entity}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='sensorType'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.sensorType && form.touched.sensorType} mx={1}>
                                            <FormLabel htmlFor='sensorType'>Sensor Type</FormLabel>
                                            <Select {...field}>
                                                <option value=''>Any</option>
                                                <option value='reference grade'>Reference Grade</option>
                                                <option value='low-cost sensor'>Low-Cost Sensor</option>
                                            </Select>
                                            <FormErrorMessage>{form.errors.sensorType}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Flex>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    </Flex>
                )}
            </Formik>
        </Container>
    )
}