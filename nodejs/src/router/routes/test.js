//
// SecureImage
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-01-10.
//

/* eslint-env es6 */

'use strict';

import { Router } from 'express';
import uuid from 'uuid/v1'; // timestamp based
import { logger } from '../../libs/logger';
import { asyncMiddleware } from '../../libs/utils';

const router = new Router();

/* eslint-disable */
/**
 * @api {POST} /album/ Create a new album
 * @apiVersion 0.0.1
 * @apiName CreateAlbum
 * @apiGroup Album
 *
 * @apiSuccess (200) {String}   id    The album's unique ID.
 *
 * @apiError   (401) Unauthorized     Authenticaiton required.
 * @apiError   (500) InternalError    The server encountered an internal error. Please retry the request.
 *
 * @apiExample {curl} Example
 *  curl -X POST http://localhost:8000/v1/album/
 *
 * @apiSuccessExample Success-Response
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "d7995710-f665-11e7-8298-1b10696245bd"
 *    }
 *
 * @apiErrorExample {json} Error-Response
 *    HTTP/1.1 401 Unauthorized
 *
 */
 /* eslint-enable */
router.get('/', asyncMiddleware(async (req, res) => {
  const myUUID = uuid();

  logger.info(`Creating response with with ID ${myUUID}`);
  return res.status(200).json({ id: myUUID });
}));

module.exports = router;
