/*
 *  *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

module.exports = [
  {
    method: 'get',
    path: '/api/v3/catalog/microservices',
    middleware: (req, res) => {
      res
        .status(200)
        .send(req.body)
    }
  },
  {
    method: 'post',
    path: '/api/v3/catalog/microservices',
    middleware: (req, res) => {

      const successCode = 201;
      const errorCodes = [
        {
          code: 400,
          errors: [Errors.ValidationError]
        },
        {
          code: 409,
          errors: [Errors.AuthenticationError]
        }
      ];


      res
        .status(200)
        .send(req.body)
    }
  },
  {
    method: 'get',
    path: '/api/v3/catalog/microservices/:id',
    middleware: (req, res) => {
      res
        .status(200)
        .send(req.body)
    }
  },
  {
    method: 'patch',
    path: '/api/v3/catalog/microservices/:id',
    middleware: (req, res) => {
      res
        .status(200)
        .send(req.body)
    }
  },
  {
    method: 'delete',
    path: '/api/v3/catalog/microservices/:id',
    middleware: (req, res) => {
      res
        .status(200)
        .send(req.body)
    }
  }
];